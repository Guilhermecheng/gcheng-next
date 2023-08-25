import { gql } from "@apollo/client";

export const GET_ALL_SKILLS = gql`
    query GetAllSkills {
        skillItems {
            id
            skillName
            skillSlugId
            skillImage {
                url
            }
        }
    }
`