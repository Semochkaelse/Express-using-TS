import { body, oneOf } from 'express-validator'

const AutoValidator = {
  search: oneOf([
    body('year', 'Field year is required').isInt(),
    body('owner_id', 'Field owner_id is required').isInt()
  ]),

  deleteValidators: () => [
    body('id', 'Technology id is required').exists().isLength({ min: 1, max: 100000 })
  ]
}

export default AutoValidator
