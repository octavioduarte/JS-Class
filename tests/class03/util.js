export const lesson = 'TRUTH TABLE - CLASS 02'


const truthTableWithAnd = `
   a   |   b   |   a && b
-------+-------+----------
true   | true  |   true
-------+-------+----------
true   | false |   false
-------+-------+----------
false  | true  |   false
-------+-------+----------
false  | false |   false
`

const truthTableWithOr = `
   a   |   b   |   a || b
-------+-------+----------
true   | true  |   true
-------+-------+----------
true   | false |   true
-------+-------+----------
false  | true  |   true
-------+-------+----------
false  | false |   false
`

const truthTableWithNot = `
   a   |   !a
-------+----------
true   |   false
-------+----------
false   |  true
`

export const truthTableAnswers = [
    truthTableWithAnd,
    truthTableWithOr,
    truthTableWithNot
]