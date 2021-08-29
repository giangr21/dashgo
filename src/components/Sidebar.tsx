import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export default function SideBar() {
	return (
		<h1>
			<Box
				as="aside"
				w="64"
				mr="8"
			>
				<Stack spacing="12" align="flex-start">
					<Box>
						<Text fontWeight="bold" color="gray.400" fontSize="small">
							GERAL
						</Text>
						<Stack spacing="4" mt="8" align="stretch">
							<Link display="flex" align="center" color="pink.400" py="1">
								<Icon as={RiDashboardLine} fontSize="20" />
								<Text ml="4" fontWeight="medium">
									Dashboard
								</Text>
							</Link>
							<Link display="flex" align="center" color="pink.400" py="1">
								<Icon as={RiContactsLine} fontSize="20" />
								<Text ml="4" fontWeight="medium">
									Usuarios
								</Text>
							</Link>
						</Stack>
					</Box>
					<Box>
						<Text fontWeight="bold" color="gray.400" fontSize="small">
							AUTOMACAO
						</Text>
						<Stack spacing="4" mt="8" align="stretch">
							<Link display="flex" align="center" color="pink.400" py="1">
								<Icon as={RiInputMethodLine} fontSize="20" />
								<Text ml="4" fontWeight="medium">
									Formularios
								</Text>
							</Link>
							<Link display="flex" align="center" color="pink.400" py="1">
								<Icon as={RiGitMergeLine} fontSize="20" />
								<Text ml="4" fontWeight="medium">
									Automacao
								</Text>
							</Link>
						</Stack>
					</Box>
				</Stack>
			</Box>
		</h1>
	)
}