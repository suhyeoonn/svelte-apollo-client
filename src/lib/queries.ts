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

export const POST_TEAM = gql`
	mutation PostTeam($input: PostTeamInput!) {
		postTeam(input: $input) {
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

export const GET_PEOPLE = gql`
	query GetPeople {
		people {
			id
			first_name
			last_name
			sex
			blood_type
		}
	}
`;

export const GET_PERSON = gql`
	query GetPerson($id: ID!) {
		person(id: $id) {
			id
			first_name
			last_name
			sex
			blood_type
			serve_years
			role
			team
			from
			tools {
				__typename
				... on Software {
					id
				}
				... on Equipment {
					id
					count
				}
			}
		}
	}
`;

export const DELETE_PERSON = gql`
	mutation DeletePerson($id: ID!) {
		deletePerson(id: $id) {
			id
		}
	}
`;
export const POST_PERSON = gql`
	mutation PostPerson($input: PostPersonInput!) {
		postPerson(input: $input) {
			id
			first_name
			last_name
			sex
			blood_type
			serve_years
			role
			team
			from
		}
	}
`;

export const EDIT_PERSON = gql`
	mutation EditTeam($id: ID!, $input: PostPersonInput!) {
		editPerson(id: $id, input: $input) {
			id
			first_name
			last_name
			sex
			blood_type
			serve_years
			role
			team
			from
		}
	}
`;

export const INCREASE_EQUIPMENT = gql`
	mutation IncreaseEquipment($id: ID!) {
		increaseEquipment(id: $id) {
			count
		}
	}
`;
