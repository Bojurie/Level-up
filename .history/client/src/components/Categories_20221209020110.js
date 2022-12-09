import styled from "styled-components";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;


const Categories = () => {
  // const [category, setCategory ] = useState();
  // useEffect(() => {
  //   const getCategory = async () => {
  //     try {
  //        const res = await axios.get(
  //         category, `http://localhost:5001/products?category=${category}`
           
  //       );
  //          setCategory(res.data);
  //          console.log(category)
  //     } catch (err) {}
  //   }
  //   getCategory();
  // }, [category])
 return (
    <Container>
      {category.map((product) => (
        <CategoryItem product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Categories;