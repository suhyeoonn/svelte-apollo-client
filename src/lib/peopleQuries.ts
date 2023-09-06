import { gql } from '@apollo/client/core';

const Names = gql`
	fragment names on People {
		first_name
		last_name
	}
`;
const HealthInfo = gql`
	fragment healthInfo on People {
		sex
		blood_type
	}
`;
const WorkInfo = gql`
	fragment workInfo on People {
		serve_years
		role
		team
		from
	}
`;

export const GET_PEOPLE = gql`
	query GetPeople {
		people {
			id
			...names
			...healthInfo
		}
	}
	${Names}
	${HealthInfo}
`;

export const GET_PERSON = gql`
	query GetPerson($id: ID!) {
		person(id: $id) {
			id
			...names
			...healthInfo
			...workInfo
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
	${Names}
	${HealthInfo}
	${WorkInfo}
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
