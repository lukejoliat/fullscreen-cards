import { AnimateSharedLayout } from "framer-motion";
import { Box } from "./Box/Box";
import { BoxDescription } from "./Box/BoxDescription";
import { BoxTitle } from "./Box/BoxTitle";
import { Flex } from "./Layout";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="heading">
        My <em>Favorite</em> <span>Books</span>
      </h1>
      <Flex wrap direction={"row"} className="books_list">
        <AnimateSharedLayout>
          <Box backgroundUrl={"451.jpg"} id={1}>
            <BoxTitle>Farenheit 451</BoxTitle>
            <BoxDescription>
              Fahrenheit 451 is a 1953 dystopian novel by American writer Ray
              Bradbury. Often regarded as one of his best works, Fahrenheit 451
              presents an American society where books have been outlawed and
              "firemen" burn any that are found.{" "}
            </BoxDescription>
          </Box>
          <Box backgroundUrl={"hobbit.jpg"} id={2}>
            <BoxTitle>The Hobbit</BoxTitle>
            <BoxDescription>
              The Hobbit, or There and Back Again is a children's fantasy novel
              by English author J. R. R. Tolkien. It was published in 1937 to
              wide critical acclaim, being nominated for the Carnegie Medal and
              awarded a prize from the New York Herald Tribune for best juvenile
              fiction. The book remains popular and is recognized as a classic
              in children's literature.
            </BoxDescription>
          </Box>
          <Box backgroundUrl={"gatsby.jpg"} id={3}>
            <BoxTitle>The Great Gatsby</BoxTitle>
            <BoxDescription>
              The Great Gatsby is a 1925 novel by American writer F. Scott
              Fitzgerald. Set in the Jazz Age on Long Island, near New York
              City, the novel depicts first-person narrator Nick Carraway's
              interactions with mysterious millionaire Jay Gatsby and Gatsby's
              obsession to reunite with his former lover, Daisy Buchanan.
            </BoxDescription>
          </Box>
        </AnimateSharedLayout>
      </Flex>
    </div>
  );
}
