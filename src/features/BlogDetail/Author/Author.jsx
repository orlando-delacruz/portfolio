import * as S from "./Author.styled";

const Author = ({ author }) => {
  if (!author) return null;

  const { name, role, avatar, bio } = author;
  const avatarUrl = avatar?.url || null;
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <S.AuthorWrapper>
      <S.AuthorCard>
        <S.AvatarWrapper>
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} loading="lazy" />
          ) : (
            <span className="fallback">{initials}</span>
          )}
        </S.AvatarWrapper>
        <S.AuthorInfo>
          <S.AuthorName>{name}</S.AuthorName>
          {role && <S.AuthorRole>{role}</S.AuthorRole>}
          {bio && <S.AuthorBio>{bio}</S.AuthorBio>}
        </S.AuthorInfo>
      </S.AuthorCard>
    </S.AuthorWrapper>
  );
};

export default Author;
