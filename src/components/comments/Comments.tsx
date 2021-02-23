import React from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import * as H from 'history';

export const Comments = ({ match }) => {
  const { index } = match.params;
  return (
    <div>
      <CommentList postIndex={Number(index)} />
      <CommentForm postIndex={Number(index)} />
    </div>
  );
};


export interface RouteComponentProps<P> {
  match: match<P>;
  history: H.History;
  staticContext?: any;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

