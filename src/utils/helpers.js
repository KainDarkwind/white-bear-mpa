export function checkIsOver(str, num) {
   if (str.length > num) return true;
   else return false;
}

export const MAX_CARD_CHARS = 240;

export function safelyParseJson(str) {
   try {
      JSON.parse(str);
   } catch {
      return str;
   }
   return JSON.parse(str);
}
