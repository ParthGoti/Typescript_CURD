import { Router } from "express";
import {
  createRole,
  deleteRole,
  getAllRoles,
  getRole,
  updateRole,
} from "../controllers/role.controller";

const roleRoute = () => {
  const router = Router();

  router.post("/createrole", createRole);
  router.get("/getroles", getAllRoles);
  router.get("/role/:id", getRole);
  router.put("/updaterole", updateRole);
  router.delete("/deleterole/:id", deleteRole);

  return router;
};

export { roleRoute };
