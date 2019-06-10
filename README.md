# Inlämningsuppgift 2

## Teoretisk del

### G-frågor

#### Vad är skillnaden mellan backend och databas? Beskriv vad respektive ansvarar för
En backend är en kodbas med bland annat funktioner för att behandla data. Den kan räkna ut matematik eller hämta enskilda objekt från en databas. Backend innehåller alltid kod användaren aldrig ser.
<br>
En databas är ett ställe där vi förvarar datan vi använder i både frontend och backend,
den kan innehålla objekt med användare och rättigheter, och den kan innehålla filmer och bilder. Databasen är en låda vi lägger all information i vi har användning av i framtiden.

#### Varför är det viktigt att vara konsekvent i sin API-design för att skapa ett användarvänligt API?
Ett bra API underlättar t.ex för oss frontend utvecklare, detta gör det lättare att hämta och skicka rätt data och se till att det hamnar på rätt plats i databasen. Ett bra och konsekvent API “tänk” gör också att mindre fel och buggar kan förekomma då man själv kan bestämma hur vissa scheman ska se ut.

#### Vad är autentisering vs auktorisering?
Autentisering innebär att man verifierar identiteten av en användare.
<br>
Auktorisering innebär vad en användare har rättigheter att göra.

#### Vad är skillnaden mellan "Private Cloud" och "Public Cloud". Vilka typer av tjänster erbjuder public cloud?
Ett Public Cloud innebär att många användare delar på samma server. De tjänster som erbjuder dessa är Cloud Service Providers\* (CSPs).
<br>
I ett Private Cloud har ett företag ett eget datacenter med servrar som endast de har tillgång till.
<br><br>
\*Om vi tolkat frågan fel och den handlade om tjänster som är tillgängliga tack vare Public Cloud så är det alla typer av tjänster som behöver vara åtkomliga över internet.

#### Varför testar vi mjukvara?

Anledningen till att mjukvara testas är för att förebygga fel och buggar.
Testas mjukvaran man skriver kan man på ett tidigt stadie upptäcka om koden beter sig som den ska.
Ännu bättre är det och skriva test innan man skriver koden, TDD.
Denna utvecklingsmetod innebär att man först skriver ett test, och därefter skriver man koden specifikt till det testet, använder man denna metod upptäcker man direkt om kod måste skrivas om eller om det går att implementera.

### VG-frågor

#### Vad innebär Service Oriented Architecture (SOA)?
Det innebär att projektet delas upp i olika "services", eller tjänster, där ett team jobbar med varje tjänst. En tjänst kan beskrivas som en funktion som är oberoende av sin omgivning.

#### Vad är fördelarna med API:er jämfört med en webblösning som går direkt mot en databas?
Om man använder sig av API istället för en hårt kopplad front- och backend betyder det att man kan använda backenden för flera olika applikationer, t.ex. en webbapp och en mobilapp. Det möjliggör även att andra kan få tillgång till data om man väljer att göra APIet publikt.

#### Vad innebär OAUTH?
OAUTH möjliggör att användaren kan logga in via en extern tjänst, t.ex med ett Google konto eller dylikt. Med OAUTH får vi då tillgång till information om användaren från tjänsten som användes vid inloggning. Detta innebär också att vi ej behöver spara lösenord på våran egen tjänst då ansvaret ligger hos t.ex Google ifall man väljer att logga in med detta.

#### Vilka typer av managed services erbjuds av Public Cloud och vad innebär de?
On Premises - Denna service innebär att du själv har hand om servern och serverunderhåll, så kallad "på plats". Skulle servern krascha så är det upp till dig själv att reparera och få igång den igen.<br>

Infrastructure as a Service - Denna service låter dig sköta allt "på" servern helt själv, allt ifrån OS till din applikation du vill köra. förutom hårdvaran som sköts av företaget som står för tjänsten.<br>

Platform as a Service - Denna tjänst utför oftast bara en sak, till exempel Google App Engine. Dessa låter dig lägga upp en applikation på molnet och driver den sedan, du betalar oftast bara för det som "används" av servern och slipper tänka på server underhåll.<br>

Software as a Service - Denna service är mer generell för hela internet, en software är till exempel GitHub som vi utvecklare använder flitigt, denna tjänst sköts helt av andra och är oberoende av användare. Detta är den vanligaste tjänsten på internet.

#### Vad innebär TDD och BDD?
TDD står för Test Driven Development och innebär att man skriver tester för en funktion innan man implementerar den.

BDD står för Behavior Driven Development och fungerar ungefär som TDD. Det innebär att man specificerar hur funktionen ska bete sig innan den implementeras. Detta görs i klartext istället för i kod för att även icke-utvecklare ska kunna förstå.

## Praktisk del

### Produktbeskrivning
Syftet med sidan är att användare ska kunna läsa och skriva recensioner om olika drycker.

Användaren ska registrera sig och logga in för att sedan söka sig fram till den dryck man vill recensera. Detta kan göras antingen genom att välja drycken ur en lista eller genom att söka efter dryckens namn.

När användaren valt dryck ska denna få skriva en kort recension om just denna dryck som sedan visas på startsidan. Användaren ska i sin recension rösta upp eller ner drycken. Drycker ska sedan visas på startsidan i en lista sorterad efter vad användaren väljer - antalet recensioner eller högst/lägst poäng.

Alla recensioner ska visas som ett “flöde” på startsidan, detta för att sidan inte ska kännas “tom” och ge användarna lite idéer till vilken dryck dem vill testa.

### Use Cases
<a href="https://trello.com/b/xO3GzxDI">https://trello.com/b/xO3GzxDI</a>
