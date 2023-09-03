import { gql } from '@apollo/client/core';

export const GET_TEAMS = gql`
	query GetTeams {
		teams {
			id
			manager
			members {
				id
				first_name
				last_name
				role
			}
		}
	}
`;

export const GET_TEAM = gql`
	query GetTeam($id: ID!) {
		team(id: $id) {
			id
			manager
			office
			extension_number
			mascot
			cleaning_duty
			project
		}
	}
`;
