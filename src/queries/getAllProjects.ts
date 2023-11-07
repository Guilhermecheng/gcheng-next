import { gql } from "@apollo/client";

export const GET_ALL_PROJECTS = gql`
    query GetAllProjects {
        portifolioProjects(first: 100) {
            id
            projectName
            projectBrief
            linkToPage
            linkToRepository
            projectBriefPortuguese
            projectDescription
            projectDescriptionPortuguese
            skillsUsed
            projectThumb {
                url
            }
        }
    }
`