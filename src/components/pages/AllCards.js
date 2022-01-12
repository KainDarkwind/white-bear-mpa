import React from "react";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import { safelyParseJson } from "../../utils/helpers";
import orderBy from "lodash/orderBy";
import axios from "axios";

export default class AllCards extends React.Component {
   constructor(props) {
      super(props);
      console.log("In All Cards component");

      const defaultOrder = `["totalSuccessfulAttempts", "desc"]`;
      this.state = {
         activeCards: [],
         displayedCards: [],
         searchInput: "",
         cardOrder: defaultOrder,
      };
   }

   componentDidMount() {
      axios
         .get(
            "https://raw.githubusercontent.com/KainDarkwind/white-bear-mpa/main/src/mock-data/memory-cards.json"
         )
         .then((res) => {
            // handle success
            console.log(res.data);
            const memoryCards = res.data;
            const activeCards = memoryCards.filter((card) => {
               return card;
            });
            const defaultOrder = `["totalSuccessfulAttempts", "desc"]`;
            const params = safelyParseJson(defaultOrder);
            const orderedCards = orderBy(activeCards, ...params);
            this.setState({
               activeCards: orderedCards,
               displayedCards: orderedCards,
            });
         })
         .catch((error) => {
            // handle error
            console.log(error);
         });
   }

   updateState(e) {
      let value = e.target.value;
      // eslint-disable-next-line
      if (value === "true" || value === "false" || value == Number(value)) {
         value = safelyParseJson(value);
      }

      this.setState({ [e.target.name]: value });
   }

   setSearchInput(e) {
      const searchInput = e.target.value;
      const order = this.state.cardOrder;

      const params = safelyParseJson(order);
      const orderedProp = params[0];
      const sortedOrder = params[1];
      this.setState((prevState) => {
         const filteredCards = prevState.activeCards.filter((card) => {
            const normalizedSearchInput = searchInput.toLowerCase();
            const normalizedAnswer = card.answer.toLowerCase();
            const normalizedImagery = card.imagery.toLowerCase();
            return (
               normalizedAnswer.includes(normalizedSearchInput) ||
               normalizedImagery.includes(normalizedSearchInput)
            );
         });
         return {
            searchInput: searchInput,
            displayedCards: orderBy(filteredCards, orderedProp, sortedOrder),
         };
      });
   }

   setCardOrder(e) {
      const cardOrder = e.target.value;
      const params = safelyParseJson(cardOrder);
      this.setState((prevState) => {
         return {
            cardOrder: cardOrder,
            displayedCards: orderBy(prevState.displayedCards, ...params),
         };
      });
   }

   render() {
      return (
         <AppTemplate>
            <div className="row my-4">
               <div className="col-8">
                  <input
                     className="form-control form-control-sm"
                     type="text"
                     placeholder="Search for a word"
                     value={this.state.searchInput}
                     onChange={(e) => {
                        this.setSearchInput(e);
                     }}
                  />
               </div>
               <div className="col-4">
                  <button className="btn btn-primary btn-sm btn-block">
                     Search
                  </button>
               </div>
            </div>
            <div className="row my-4 no-gutters">
               <div className="col-4">
                  <p className="text-muted mt-1">Sort cards by</p>
               </div>
               <div className="col-8">
                  <select
                     value={this.state.cardOrder}
                     onChange={(e) => {
                        this.setCardOrder(e);
                     }}
                     className="form-control form-control-sm"
                  >
                     <option value='["totalSuccessfulAttempts", "desc"]'>
                        Hardest
                     </option>
                     <option value='["totalSuccessfulAttempts", "asc"]'>
                        Easiest
                     </option>
                     <option value='["createdAt", "asc"]'>Oldest</option>
                     <option value='["createdAt", "desc"]'>Most Recent</option>
                  </select>
               </div>
            </div>
            {this.state.displayedCards.map((memoryCard) => {
               return (
                  <MemoryCard
                     answer={memoryCard.answer}
                     imagery={memoryCard.imagery}
                     key={memoryCard.id}
                  />
               );
            })}
         </AppTemplate>
      );
   }
}
