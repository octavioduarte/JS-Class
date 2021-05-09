const truthTableWithAnd = `
   a   |   b   |   a && b
-------+-------+----------
true   | true  |   
-------+-------+----------
true   | false |   
-------+-------+----------
false  | true  |   
-------+-------+----------
false  | false |   
`

const truthTableWithOr = `
   a   |   b   |   a || b
-------+-------+----------
true   | true  |   
-------+-------+----------
true   | false |   
-------+-------+----------
false  | true  |   
-------+-------+----------
false  | false |   
`

const truthTableWithNot = `
   a   |   !a
-------+----------
true   |   
-------+----------
false  |  
`

export const truthTables = [
   truthTableWithAnd,
   truthTableWithOr,
   truthTableWithNot
]
