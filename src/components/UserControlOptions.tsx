import React from "react";
import { logout } from "../services/auth.service";

interface Props {}

export const UserControlOptions: React.FC<Props> = () => {
  return (
    <ul className="list-group user-control__options">
      <li className="list-group-item" onClick={logout}>
        Logout
      </li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
  );
};
