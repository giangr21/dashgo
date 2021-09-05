import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gian Antunes</Text>
        <Text color="gray.300" fontSize="small">
          giangr21@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Gian Grassi" />
    </Flex>
  );
}
