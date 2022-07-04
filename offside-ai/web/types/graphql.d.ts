export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type CreateListingInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type Listing = {
  __typename?: 'Listing';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createListing: Listing;
  deleteListing: Listing;
  updateListing: Listing;
};


export type MutationcreateListingArgs = {
  input: CreateListingInput;
};


export type MutationdeleteListingArgs = {
  id: Scalars['Int'];
};


export type MutationupdateListingArgs = {
  id: Scalars['Int'];
  input: UpdateListingInput;
};

export type Query = {
  __typename?: 'Query';
  listing?: Maybe<Listing>;
  listings: Array<Listing>;
  redwood?: Maybe<Redwood>;
};


export type QuerylistingArgs = {
  id: Scalars['Int'];
};

export type Redwood = {
  __typename?: 'Redwood';
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type UpdateListingInput = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditListingByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditListingById = { __typename?: 'Query', listing?: { __typename?: 'Listing', id: number, title: string, description: string, createdAt: string } | null };

export type UpdateListingMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateListingInput;
}>;


export type UpdateListingMutation = { __typename?: 'Mutation', updateListing: { __typename?: 'Listing', id: number, title: string, description: string, createdAt: string } };

export type DeleteListingMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteListingMutation = { __typename?: 'Mutation', deleteListing: { __typename?: 'Listing', id: number } };

export type FindListingByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindListingById = { __typename?: 'Query', listing?: { __typename?: 'Listing', id: number, title: string, description: string, createdAt: string } | null };

export type FindListingsVariables = Exact<{ [key: string]: never; }>;


export type FindListings = { __typename?: 'Query', listings: Array<{ __typename?: 'Listing', id: number, title: string, description: string, createdAt: string }> };

export type CreateListingMutationVariables = Exact<{
  input: CreateListingInput;
}>;


export type CreateListingMutation = { __typename?: 'Mutation', createListing: { __typename?: 'Listing', id: number } };

export type PropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type PropertiesQuery = { __typename?: 'Query', properties: Array<{ __typename?: 'Listing', id: number, title: string, description: string, createdAt: string }> };
