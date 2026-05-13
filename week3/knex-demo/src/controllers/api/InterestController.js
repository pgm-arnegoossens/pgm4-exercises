/**
 * Interest API Controller
 */

import Interest from "../../models/Interest.js";

/**
 * Get a single interest
 */
export const show = async (req, res, next) => {
  const id = req.params.id;
  const interests = await Interest.query().findById(id);

  res.json(interests);
};

/**
 * Get all interests
 */
export const index = async (req, res, next) => {
  const interests = await Interest.query();
  // const interests = await Interest.query().where('name', 'like', 'B%');

  res.json(interests);
};

/**
 * Create a new interest
 */
export const store = async (req, res, next) => {
  const interests = await Interest.query().insert(req.body);

  res.status(200).json(interests);
};

/**
 * Update an interest
 */
export const update = async (req, res, next) => {
  const id = req.params.id;
  const interests = await Interest.query().findById(id).patch(req.body);
  // await Interest.query().patchAndFetchById(req.params.id, req.body); // This does the same as the line above

  res.status(200).json(interests);
};

/**
 * Delete an interest
 */
export const destroy = async (req, res, next) => {
  const id = req.params.id;
  const interests = await Interest.query().deleteById(id);
};
