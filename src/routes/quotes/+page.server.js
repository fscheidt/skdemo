/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const url = "https://zenquotes.io/api/random";
  const res = await fetch(url);
  const data = res.json();
  if (res.ok) {
    return {
      zenquote: data,
    };
  } else {
    throw new Error(data);
  }
}

// /** @type {import('./$types').PageServerLoad} */
// export async function load({ params }) {
//   const staticData = [
//     {
//       "q": "What have you done today to make someone else happy?",
//       "a": "Deepam Chaterjee",
//       "h": "<blockquote>&ldquo;What have you done today to make someone else happy?&rdquo; &mdash; <footer>Deepam Chaterjee</footer></blockquote>"
//     }
//   ];
//   return {
//     zenquote: staticData,
//   };
// }