const argumentsCount = [...process.argv]
    .filter( ( item ) => Number( item ) )
    .reduce( ( accumulator, number ) => accumulator + Number( number ), 0);

console.log( argumentsCount );