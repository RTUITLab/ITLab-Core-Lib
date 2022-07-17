export function getAllEvents(props:{[index: string]: any}):{[index: string]: any} {
  return Object.keys(props).reduce((acc:any, key) => {
    if (typeof props[key]==="function" && key.startsWith("on")) {
      acc[key] = props[key];
    }
    return acc;
  },{});
}
