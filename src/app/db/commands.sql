PRAGMA foreign_keys = ON;

        CREATE TABLE IF NOT EXISTS leagues (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE NOT NULL,
            country TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS teams (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE NOT NULL,
            league_id INTEGER,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (league_id) REFERENCES leagues(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS players (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            position TEXT NOT NULL,  -- Posição do jogador (ex: AD Carry, Support, etc.)
            team_id INTEGER,
            total_points REAL DEFAULT 0,  -- Total de pontos acumulados pelo jogador
            current_rank TEXT DEFAULT 'Bronze',  -- Rank do jogador (ex: Bronze, Silver, Gold)
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS matches (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            match_date DATETIME NOT NULL,  -- Data da partida
            total_points REAL DEFAULT 0,  -- Total de pontos acumulados na partida (pode ser somatório dos pontos dos jogadores)
            league_id INTEGER,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (league_id) REFERENCES leagues(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS player_matches (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            player_id INTEGER,
            match_id INTEGER,
            points REAL NOT NULL,  -- Pontos que o jogador conquistou na partida
            FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE,
            FOREIGN KEY (match_id) REFERENCES matches(id) ON DELETE CASCADE
        );


        INSERT INTO leagues (name, country)
        VALUES ('LEC', 'Europe');

                -- Delete a league by its ID
        DELETE FROM leagues WHERE id = 2;

        INSERT INTO teams (name, league_id)
        VALUES ('Brion', 1);

        INSERT INTO players (username, position, team_id)
        VALUES ('Doran', 'Top Laner', 1);

        SELECT * FROM players

        ALTER TABLE leagues
        ADD COLUMN tier TEXT;

        UPDATE teams SET logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYbeziYGdWyEgRULXLVF8UU3fFpzD7CoBeFg&s' WHERE id is 10
        UPDATE leagues SET description = 'A LCK é a liga coreana de league of legends, onde diversas das maiores lendas do league foram forjadas.' WHERE id is 1
        UPDATE leagues SET tier = '1' WHERE id is 4