
const ProfileCard = ({profile}) => {
  const {avatar_url,login,html_url}=profile
  return (
    <article className="profile__card">
      <img className="profile__img"src={avatar_url} alt={login} />
      <h3 className="profile__name">{login}</h3>
      <a className="profile__view btn-primary btn" href={html_url}>View Profile</a>
    </article>
  )
}

export default ProfileCard
