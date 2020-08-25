const recursiveParseText = (
  text: string,
  slices: [number, number][],
  offset,
): string => {
  const [head, ...tail] = slices;

  if (head) {
    const [start, end] = head;
    const _start = start - offset;
    const _end = end - offset + 1;

    const normalText1 = text.slice(0, _start);
    const specialText = text.slice(_start, _end);
    const normalText2 = text.slice(_end);

    return [
      normalText1,
      `<span>${specialText}</span>`,
      recursiveParseText(normalText2, tail, end + 1),
    ].join('');
  }

  return text;
};

export const parseText = (
  text: string,
  slices: [number, number][],
) => {
  return `<p>${recursiveParseText(text, slices, 0)}</p>`;
}
