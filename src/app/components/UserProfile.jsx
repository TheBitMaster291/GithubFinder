"use client";

import { Avatar, Badge, Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Repos from './Repos';

const UserProfile = ({userData}) => {
  return (
   <>
   <Flex my={16} border={"2px solid"} borderColor={"teal.200"} borderRadius={4} padding={8}>
    <VStack gap={5}>
    <Avatar size={"2xl"} name={userData.name} src={userData.avatar_url} />
					<Button colorScheme='teal'>
						<a href={userData.html_url} target='_blank'>
							View Profile
						</a>
					</Button>
    </VStack>
    <VStack ml={8} alignItems={"self-start"}>
        <Flex gap={4}>
          <Badge fontSize={"0.9em"} colorScheme='orange'>
            Public Repos: {userData.public_repos}
          </Badge>
          <Badge fontSize={"0.9em"} colorScheme='pink'>
            Public Gists: {userData.public_gists}
          </Badge>
          <Badge fontSize={"0.9em"} colorScheme='cyan'>
            Followers: {userData.followers}
          </Badge>
          <Badge fontSize={"0.9em"} colorScheme='purple'>
            Following: {userData.following}
          </Badge>
        </Flex>

        <Text fontSize={"2xl"} fontWeight={"bold"} mt={4} color={"teal.200"}>
            {userData.name}
        </Text>
        <Text fontSize={"2xl"} fontWeight={"bold"} mt={4} color={"teal.200"}>
            {userData.bio}
        </Text>
        <Box>
            <Text fontSize={"md"}>
                <Text as={"span"} fontWeight={"bold"} color={"teal.400"} mr={1}>
                    Company:
                </Text>
                {userData.company || "Not Specified"}
            </Text>
            <Text fontSize={"md"}>
                <Text as={"span"} fontWeight={"bold"} color={"teal.400"} mr={1}>
                    Location:
                </Text>
                {userData.location || "Not Specified"}
            </Text>
            <Text fontSize={"md"}>
                <Text as={"span"} fontWeight={"bold"} color={"teal.400"} mr={1}>
                    Blog / Website:
                </Text>
                {userData.blog ?(
                    <a href={userData.blog} target='_blank'>
                    {userData.blog}
                </a>
                ):("Not Specified")}
            </Text>
            <Text fontSize={"md"}>
                <Text as={"span"} fontWeight={"bold"} color={"teal.400"} mr={1}>
                    Member Since:
                </Text>
                {new Date(userData.created_at).toLocaleDateString()}
            </Text>
        </Box>
    </VStack>
   </Flex>
   <Repos reposUrl={userData.repos_url}/>
   </>
  )
}

export default UserProfile
