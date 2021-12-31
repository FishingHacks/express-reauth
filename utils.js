function getRandomUUID(length) {
  let alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,tu,v,w,x,y,z".split(
    ","
  );
  alphabet.forEach((element) => {
    alphabet.push(element.toUpperCase());
  });
  "1,2,3,4,5,6,7,8,9,0,!,-,_,*,~".split(",").forEach((element) => {
    alphabet.push(element);
  });
  let UUID = "";
  if (!(typeof length == "number")) throw new Error("No number Provided");
  for (let i = 0; i < length - 1; i++) {
    UUID += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return UUID;
}

module.exports = {getRandomUUID}