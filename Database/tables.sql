-- MediaServer.dbo.Media definition

-- Drop table

-- DROP TABLE MediaServer.dbo.Media;

CREATE TABLE Media ( MediaId int IDENTITY(1,1) NOT NULL, Title nvarchar(200) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL, Description nvarchar(MAX) COLLATE SQL_Latin1_General_CP1_CI_AS NULL, [Type] nvarchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL, ReleaseYear nvarchar(50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL, Rating nvarchar(10) COLLATE SQL_Latin1_General_CP1_CI_AS NULL, ThumbnailPath nvarchar(500) COLLATE SQL_Latin1_General_CP1_CI_AS NULL, TrailerPath nvarchar(500) COLLATE SQL_Latin1_General_CP1_CI_AS NULL, IsActive bit DEFAULT 1 NULL, CreatedAt datetime2 DEFAULT getdate() NULL, UpdatedAt datetime2 DEFAULT getdate() NULL, CONSTRAINT PK__Media__B2C2B5CFF382FC2F PRIMARY KEY (MediaId));
 CREATE NONCLUSTERED INDEX IX_Media_Title ON MediaServer.dbo.Media (  Title ASC  )  
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ] ;
 CREATE NONCLUSTERED INDEX IX_Media_Type ON MediaServer.dbo.Media (  Type ASC  )  
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ] ;
ALTER TABLE MediaServer.dbo.Media WITH NOCHECK ADD CONSTRAINT CK__Media__Type__45F365D3 CHECK (([Type]='Series' OR [Type]='Movie'));


-- MediaServer.dbo.Users definition

-- Drop table

-- DROP TABLE MediaServer.dbo.Users;

CREATE TABLE Users ( UserId int IDENTITY(1,1) NOT NULL, Username nvarchar(50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL, Email nvarchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL, PasswordHash nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL, [Role] nvarchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS DEFAULT 'User' NOT NULL, CreatedAt datetime2 DEFAULT getdate() NOT NULL, IsActive bit DEFAULT 1 NOT NULL, CONSTRAINT PK__Users__1788CC4C01BBCD4A PRIMARY KEY (UserId), CONSTRAINT UQ__Users__536C85E4617DC186 UNIQUE (Username), CONSTRAINT UQ__Users__A9D1053419DE5217 UNIQUE (Email));
 CREATE NONCLUSTERED INDEX IX_Users_Email ON MediaServer.dbo.Users (  Email ASC  )  
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ] ;
 CREATE NONCLUSTERED INDEX IX_Users_Role ON MediaServer.dbo.Users (  Role ASC  )  
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ] ;
ALTER TABLE MediaServer.dbo.Users WITH NOCHECK ADD CONSTRAINT CK__Users__Role__3E52440B CHECK (([Role]='Admin' OR [Role]='User'));


-- MediaServer.dbo.MovieFiles definition

-- Drop table

-- DROP TABLE MediaServer.dbo.MovieFiles;

CREATE TABLE MovieFiles ( MovieFileId int IDENTITY(1,1) NOT NULL, MediaId int NOT NULL, FilePath nvarchar(500) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL, FileName nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL, CreatedAt datetime2 DEFAULT getdate() NULL, CONSTRAINT PK__MovieFil__F7BA413D87ED9082 PRIMARY KEY (MovieFileId), CONSTRAINT FK_MovieFiles_Media FOREIGN KEY (MediaId) REFERENCES Media(MediaId) ON DELETE CASCADE);


-- MediaServer.dbo.SeriesSeasons definition

-- Drop table

-- DROP TABLE MediaServer.dbo.SeriesSeasons;

CREATE TABLE SeriesSeasons ( SeasonId int IDENTITY(1,1) NOT NULL, MediaId int NOT NULL, SeasonNumber int NOT NULL, Title nvarchar(200) COLLATE SQL_Latin1_General_CP1_CI_AS NULL, CreatedAt datetime2 DEFAULT getdate() NULL, CONSTRAINT PK__SeriesSe__C1814E38EAF936A6 PRIMARY KEY (SeasonId), CONSTRAINT FK_SeriesSeasons_Media FOREIGN KEY (MediaId) REFERENCES Media(MediaId) ON DELETE CASCADE);


-- MediaServer.dbo.SeriesEpisodes definition

-- Drop table

-- DROP TABLE MediaServer.dbo.SeriesEpisodes;

CREATE TABLE SeriesEpisodes ( EpisodeId int IDENTITY(1,1) NOT NULL, SeasonId int NOT NULL, EpisodeNumber int NOT NULL, Title nvarchar(200) COLLATE SQL_Latin1_General_CP1_CI_AS NULL, FilePath nvarchar(500) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL, CreatedAt datetime2 DEFAULT getdate() NULL, CONSTRAINT PK__SeriesEp__AC6609F589282E3E PRIMARY KEY (EpisodeId), CONSTRAINT FK_SeriesEpisodes_Season FOREIGN KEY (SeasonId) REFERENCES SeriesSeasons(SeasonId) ON DELETE CASCADE);


-- MediaServer.dbo.UserPlaybackProgress definition

-- Drop table

-- DROP TABLE MediaServer.dbo.UserPlaybackProgress;

CREATE TABLE UserPlaybackProgress ( ProgressId int IDENTITY(1,1) NOT NULL, UserId int NOT NULL, MediaId int NOT NULL, EpisodeId int NULL, LastPosition bigint DEFAULT 0 NOT NULL, Duration bigint DEFAULT 0 NOT NULL, IsCompleted bit DEFAULT 0 NOT NULL, LastWatchedAt datetime2 DEFAULT getdate() NOT NULL, CONSTRAINT PK_UserPlaybackProgress PRIMARY KEY (ProgressId), CONSTRAINT FK_UserPlaybackProgress_Episode FOREIGN KEY (EpisodeId) REFERENCES SeriesEpisodes(EpisodeId), CONSTRAINT FK_UserPlaybackProgress_Media FOREIGN KEY (MediaId) REFERENCES Media(MediaId) ON DELETE CASCADE, CONSTRAINT FK_UserPlaybackProgress_User FOREIGN KEY (UserId) REFERENCES Users(UserId));