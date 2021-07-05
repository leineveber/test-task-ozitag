// react
import React, { useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { clearData } from '../../redux/slices/fetchUser';

// components
import Section from '../Section';
import Button from '../Button';

// api
import fetchUser from '../../redux/thunk/fetchUser';
import { BASE_URL, GET_QUERY } from '../../constants/api';

// styles
import './Profile.styles.scss';

const Profile = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.fetchUser.access.accessToken);
  const info = useSelector((state) => state.fetchUser.profile);

  const handleClickBtn = () => {
    dispatch(clearData());
  };

  useEffect(() => {
    dispatch(
      fetchUser({
        url: BASE_URL,
        query: GET_QUERY,
        mode: 'profile',
        options: {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      }),
    );
  }, []);

  return info ? (
    <Section className="profile-page">
      <div className="profile-page__wrapper info">
        <h1 className="info__title title">PROFILE</h1>
        <p className="info__item">Your name: {info.name}</p>
        <p className="info__item">Your email: {info.email}</p>
        <Button className="info__btn button" text="SIGN OUT" onClick={handleClickBtn} />
      </div>
    </Section>
  ) : (
    <p>Loading</p>
  );
};

export default Profile;
