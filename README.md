# Inlämningsuppgift 2

## Teoretisk del

### G-frågor

#### Vad är skillnaden mellan backend och databas? Beskriv vad respektive ansvarar för
En backend är en kodbas med bland annat funktioner för att behandla data. Den kan räkna ut matematik eller hämta enskilda objekt från en databas. Backend innehåller alltid kod användaren aldrig ser.
En databas är ett ställe där vi förvarar datan vi använder i både frontend och backend,
den kan innehålla objekt med användare och rättigheter, och den kan innehålla filmer och bilder. Databasen är en låda vi lägger all information i vi har användning av i framtiden.


#### Varför är det viktigt att vara konsekvent i sin API-design för att skapa ett användarvänligt API?
```

```

#### Vad är autentisering vs auktorisering?
Autentisering innebär att man verifierar identiteten av en användare.
Auktorisering innebär vad en användare har rättigheter att göra.

#### Vad är skillnaden mellan "Private Cloud" och "Public Cloud". Vilka typer av tjänster erbjuder public cloud?
```

```

#### Varför testar vi mjukvara?
```

```

### VG-frågor

#### Vad innebär Service Oriented Architecture (SOA)?
```

```

#### Vad är fördelarna med API:er jämfört med en webblösning som går direkt mot en databas?
```

```

#### Vad innebär OAUTH?
OAUTH möjliggör att användaren kan logga in via en extern tjänst, t.ex med ett google konto eller dylikt. Med OAUTH får vi då tillgång till information om användaren från tjänsten som användes vid inlogging. Detta innebär också att vi ej behöver spara lösenord på våran egen tjänst då ansvaret ligger hos t.ex google ifall man väljer att logga in med detta.


#### Vilka typer av managed services erbjuds av Public Cloud och vad innebär de?
```

```

#### Vad innebär TDD och BDD?
TDD står för Test Driven Development och innebär att man skriver tester för en funktion innan man implementerar den.

BDD står för Behavior Driven Development och fungerar ungefär som TDD. Det innebär att man specificerar hur funktionen ska bete sig innan den implementaras.

## Praktisk del

### Produktbeskrivning
Syftet med sidan är att användare ska kunna läsa och skriva recensioner om olika drycker.

Användaren ska registrera sig och logga in för att sedan söka sig fram till den dryck man vill recensera. Detta kan göras antingen genom att välja drycken ur en lista eller genom att söka efter dryckens namn.

När användaren valt dryck ska denna få skriva en kort recension om just denna dryck som sedan visas på startsidan. Användaren ska i sin recension rösta upp eller ner drycken. Drycker ska sedan visas på startsidan i en lista sorterad efter vad användaren väljer - antalet recentioner eller högst/lägst poäng.

Alla recensioner ska visas som ett “flöde” på startsidan, detta för att sidan inte ska kännas “tom” och ge användarna lite idéer till vilken dryck dem vill testa.
