const {username,password}=process.env;
export const URL=`mongodb+srv://neeleshkumar19634:${password}@cluster0.c4oyu.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0`;

console.log(URL);