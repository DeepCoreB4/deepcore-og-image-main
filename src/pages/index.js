import { Flex, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import Image from 'next/image'


export default function OgImage() {

  const router = useRouter();

  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <Flex
      w={1200}
      h={630}
      bgColor="brand.black"
      
    >
      <Flex
        as="section"
        w="100%"
        maxW={1050}
        h="100%"
        direction="column"
        justifyContent="center"
        m="0 auto">
        <Image
          src="/get-og-image.jpeg"
          alt="OG-Image"
          width={1200}
          height={630}
        />
        <div>
          <h5>nr.1</h5>
        </div>
        <Text
          as="h1"
          fontFamily="heading"
          fontSize="sm"
          color="brand.grey"
          fontWeight={400}
          letterSpacing={2}
        >
          ⫺ edgar-cuppari.dev
        </Text>
        <Text
          as="h2"
          fontFamily="body"
          fontSize="mini"
          color="brand.silver"
          fontWeight={400}
          letterSpacing={2}
          textTransform="uppercase"
          my={5}
          borderBottom="solid 2px #959595"
        >
          Frontend Webdesign/ App Development/ 
        </Text>
        <Flex direction="column" w="fit-content">
          <Text
            as="h3"
            fontFamily="heading"
            fontSize="lg"
            color="brand.grey"
            fontWeight={400}
            letterSpacing={2}
            textTransform="uppercase"
            my={5}
            borderBottom="solid 2px #959595"
          >
            {title}
          </Text>
          <Text
            as="h3"
            fontFamily="body"
            fontSize="mini"
            color="brand.grey"
            fontWeight={400}
            letterSpacing={2}
            my={5}
            textTransform="uppercase"
          >
            {description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
