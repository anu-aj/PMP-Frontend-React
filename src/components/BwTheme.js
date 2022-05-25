import  { useColorMode, Button, Box}from "@chakra-ui/react";
function BwTheme(){

const { colorMode, toggleColorMode} = useColorMode();
return( <>
    <Button onClick={toggleColorMode} mt={5}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
	<Box w="300px" rounded="20px" overflow="hidden" bg={ colorMode === "dark" ? "gray.700": "gray.200"} mt={10}>
    </Box>
    </>
    );
}

export default BwTheme;