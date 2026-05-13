/**
 * User API Controller
 */

import User from "../../models/User.js";

/**
 * Get a single user
 */
export const show = async (req, res, next) => {
  const id = req.params.id;
  const users = await User.query().findById(id);

  res.json(users);
};

/**
 * Get all users
 */
export const index = async (req, res, next) => {
  const id = req.params.id;
  const users = await User.query();

  res.json(users);
};

/**
 * Create a new user
 */
export const store = async (req, res, next) => {
  const users = await User.query().insert(req.body);

  res.status(200).json(users);
};

/**
 * Update an user
 */
export const update = async (req, res, next) => {
  const id = req.params.id;
  const users = await User.query().findById(id).patch(req.body);
  // await Interest.query().patchAndFetchById(req.params.id, req.body); // This does the same as the line above

  res.status(200).json(users);
};

/**
 * Delete an user
 */
export const destroy = async (req, res, next) => {
  const id = req.params.id;
  const users = await User.query().deleteById(id);
};
