import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex alignItems="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gian Grassi </Text>
          <Text color="gray.300" fontSize="small">
            giangr21@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Gian Grassi" />
    </Flex>
  );
}
