 export const getExplolerCards = async () => {
  try {
    const res = await fetch(`https://www.jsonkeeper.com/b/4G1G`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching exploler cards:", error);
  }
};
   export const getLive = async () => {
  try {
    const res = await fetch(`https://www.jsonkeeper.com/b/VHHT`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching exploler cards:", error);
  }
};
  