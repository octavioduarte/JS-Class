// Estrutura de condição --> Analisar uma condicional e tomar uma decisão com base no resultado

// !   -->  NOT
// ||  -->  OR
// &&  -->  AND
// !=  -->  DIFFERENT (REGARDLESS OF THE TYPE)
// !== -->  DIFFERENT (ANALYZE THE TYPE)
// ==  -->  EQUAL     (REGARDLESS OF THE TYPE)
// === -->  EQUAL    (ANALYZE THE TYPE)

// Create a conditional structure using the "if" for each condition operator
// Justify the reason for the if result


// @Example

const passwordIsConfirmed = false
const userName = "Octávio Duarte"


if (!passwordIsConfirmed) {
    /**
     *  Pass of user is not confirmed --> var 'passwordIsConfirmed' is false
     */
    console.log(`${userName} your pass is not confirmed`)
} else {
       /**
     *  Pass of user is confirmed --> var 'passwordIsConfirmed' is true
     */
    console.log(`Pass of ${userName} is confirmed `)
}

