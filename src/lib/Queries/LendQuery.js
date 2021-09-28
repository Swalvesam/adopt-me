import gql from "graphql-tag";

const LEND_QUERY =  gql`
#   query LEND_QUERY {
    query LEND_QUERY {
   lend {
    loans (filters: {gender: female, country: ["KE", "US"]}, limit: 5) {
      totalCount
      values {
        name
        loanAmount
        image {
          url(presetSize: small)
        }
        activity {
          name
        }
        geocode {
          country {
            isoCode
            name
          }
        }
        lenders (limit: 0) {
          totalCount
        }
        ... on LoanPartner {
          partnerName
        }
        ... on LoanDirect {
          trusteeName
        }
      }
    }
  }
    }
# }
`

export default LEND_QUERY