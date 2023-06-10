import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.325rem;
  width: 8rem;
  height: 3rem;
  text-decoration: none;
  transition: color 0.25s ease-in-out 0s;
  font-weight: 600;
  margin: auto;
  padding-top: 20px;
  a {
    color: #777;
  }
  .active {
    color: rgb(50, 148, 248);
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const ProfilePicture = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: #222;
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: #222;
  letter-spacing: -0.004em;
`;

const Layout = () => {
  return (
    <div>
      <Profile>
        <div>
          <ProfilePicture src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/17991980_412447279124659_4931024617863790608_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5x16H9ck1QMAX8SEtOV&_nc_ht=scontent-ssn1-1.xx&oh=00_AfD5TjutyBqwlqS5fsrQ3ioUc-tAicBh4Olbpjjf1L2pXw&oe=64ABAF95" alt="프로필 사진" />
        </div>
        <div>
          <Name>semon</Name>
          <Description>보안 전문가를 꿈꾸고 있습니다.</Description>
        </div>
      </Profile>
      <Nav>
        <NavLink to="/">포스트</NavLink>
        <NavLink to="/resume">소개</NavLink>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
