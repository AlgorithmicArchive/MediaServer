using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace MediaServer.Models.Entities;

public partial class MediaServerContext : DbContext
{
    public MediaServerContext()
    {
    }

    public MediaServerContext(DbContextOptions<MediaServerContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Media> Media { get; set; }

    public virtual DbSet<MovieFiles> MovieFiles { get; set; }

    public virtual DbSet<SeriesEpisodes> SeriesEpisodes { get; set; }

    public virtual DbSet<SeriesSeasons> SeriesSeasons { get; set; }

    public virtual DbSet<UserPlaybackProgress> UserPlaybackProgress { get; set; }

    public virtual DbSet<Users> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=DefaultConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Media>(entity =>
        {
            entity.HasKey(e => e.MediaId).HasName("PK__Media__B2C2B5CFF382FC2F");

            entity.HasIndex(e => e.Title, "IX_Media_Title");

            entity.HasIndex(e => e.Type, "IX_Media_Type");

            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(getdate())");
            entity.Property(e => e.IsActive).HasDefaultValue(true);
            entity.Property(e => e.Rating).HasMaxLength(10);
            entity.Property(e => e.ReleaseYear).HasMaxLength(50);
            entity.Property(e => e.ThumbnailPath).HasMaxLength(500);
            entity.Property(e => e.Title).HasMaxLength(200);
            entity.Property(e => e.TrailerPath).HasMaxLength(500);
            entity.Property(e => e.Type).HasMaxLength(20);
            entity.Property(e => e.UpdatedAt).HasDefaultValueSql("(getdate())");
        });

        modelBuilder.Entity<MovieFiles>(entity =>
        {
            entity.HasKey(e => e.MovieFileId).HasName("PK__MovieFil__F7BA413D87ED9082");

            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(getdate())");
            entity.Property(e => e.FileName).HasMaxLength(255);
            entity.Property(e => e.FilePath).HasMaxLength(500);

            entity.HasOne(d => d.Media).WithMany(p => p.MovieFiles)
                .HasForeignKey(d => d.MediaId)
                .HasConstraintName("FK_MovieFiles_Media");
        });

        modelBuilder.Entity<SeriesEpisodes>(entity =>
        {
            entity.HasKey(e => e.EpisodeId).HasName("PK__SeriesEp__AC6609F589282E3E");

            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(getdate())");
            entity.Property(e => e.FilePath).HasMaxLength(500);
            entity.Property(e => e.Title).HasMaxLength(200);

            entity.HasOne(d => d.Season).WithMany(p => p.SeriesEpisodes)
                .HasForeignKey(d => d.SeasonId)
                .HasConstraintName("FK_SeriesEpisodes_Season");
        });

        modelBuilder.Entity<SeriesSeasons>(entity =>
        {
            entity.HasKey(e => e.SeasonId).HasName("PK__SeriesSe__C1814E38EAF936A6");

            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(getdate())");
            entity.Property(e => e.Title).HasMaxLength(200);

            entity.HasOne(d => d.Media).WithMany(p => p.SeriesSeasons)
                .HasForeignKey(d => d.MediaId)
                .HasConstraintName("FK_SeriesSeasons_Media");
        });

        modelBuilder.Entity<UserPlaybackProgress>(entity =>
        {
            entity.HasKey(e => e.ProgressId);

            entity.Property(e => e.LastWatchedAt).HasDefaultValueSql("(getdate())");

            entity.HasOne(d => d.Episode).WithMany(p => p.UserPlaybackProgress)
                .HasForeignKey(d => d.EpisodeId)
                .HasConstraintName("FK_UserPlaybackProgress_Episode");

            entity.HasOne(d => d.Media).WithMany(p => p.UserPlaybackProgress)
                .HasForeignKey(d => d.MediaId)
                .HasConstraintName("FK_UserPlaybackProgress_Media");

            entity.HasOne(d => d.User).WithMany(p => p.UserPlaybackProgress)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UserPlaybackProgress_User");
        });

        modelBuilder.Entity<Users>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__Users__1788CC4C01BBCD4A");

            entity.HasIndex(e => e.Email, "IX_Users_Email");

            entity.HasIndex(e => e.Role, "IX_Users_Role");

            entity.HasIndex(e => e.Username, "UQ__Users__536C85E4617DC186").IsUnique();

            entity.HasIndex(e => e.Email, "UQ__Users__A9D1053419DE5217").IsUnique();

            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(getdate())");
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.IsActive).HasDefaultValue(true);
            entity.Property(e => e.PasswordHash).HasMaxLength(255);
            entity.Property(e => e.Role)
                .HasMaxLength(20)
                .HasDefaultValue("User");
            entity.Property(e => e.Username).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
