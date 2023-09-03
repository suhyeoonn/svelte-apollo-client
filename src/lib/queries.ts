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

export const DELETE_TEAM = gql`
	mutation DeleteTeam($id: ID!) {
		deleteTeam(id: $id) {
			id
		}
	}
`;

export const EDIT_TEAM = gql`
	mutation EditTeam($id: ID!, $input: PostTeamInput!) {
		editTeam(id: $id, input: $input) {
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
