const initialState = {
  questions: [],
  index: 0,
  step: 0,
  apiRequest: {
    questions: [],
    allergies: [],
  },
  answer: false,
  error: false,
  allergies: [],
  terms: false,
  marketing: false,
  attestation: false,
  stepOne: {},
  stepTwo: {},
  stepThree: {
    pharmacy: {}
  },
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.questions,
      }
    case 'SET_INDEX':
      return {
        ...state,
        index: action.index,
      }
    case 'SET_STEP':
      return {
        ...state,
        step: action.step,
      }
    case 'SET_API_REQUEST':
      return {
        ...state,
        apiRequest: action.apiRequest,
      }
    case 'SET_ANSWER':
      return {
        ...state,
        answer: action.answer,
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.error,
      }
    case 'SET_ALLERGIES':
      return {
        ...state,
        allergies: action.allergies,
      }
    case 'SET_TERMS':
      return {
        ...state,
        terms: action.terms,
      }
    case 'SET_MARKETING':
      return {
        ...state,
        marketing: action.marketing,
      }
    case 'SET_ATTESTATION':
      return {
        ...state,
        attestation: action.attestation,
      }
    case 'SET_STEP_ONE':
      return {
        ...state,
        stepOne: action.stepOne,
      }
    case 'SET_STEP_TWO':
      return {
        ...state,
        stepTwo: action.stepTwo,
      }
    case 'SET_STEP_THREE':
      return {
        ...state,
        stepThree: action.stepThree,
      }
    case 'RESET':
      return {
        ...initialState,
      };
    default:
      return state
  }
}

export default rootReducer;
