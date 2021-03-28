CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE Chore (
	Id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	Name varchar(255),
	FrequencyDays int
	);

CREATE TABLE ChoreEvent(
	Id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	ChoreId uuid NOT NULL,
	EventDate date,
	FOREIGN KEY (ChoreId) REFERENCES Chore(Id)
	);
