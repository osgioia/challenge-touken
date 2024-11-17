import { Request, Response, NextFunction } from 'express';
import { findAll, findById, createCampaign, updateCampaign, deleteCampaign, getInsights } from '../services/campaign.service';

export class CampaignController {
  async getCampaigns(req: Request, res: Response, next: NextFunction) {
    try {
      const campaigns = await findAll();
      res.json({ success: true, data: campaigns });
    } catch (error) {
      next(error);
    }
  }

  async getCampaign(req: Request, res: Response, next: NextFunction) {
    try {
      const campaign = await findById(req.params.id);
      res.json({ success: true, data: campaign });
    } catch (error) {
      next(error);
    }
  }

  async createCampaign(req: Request, res: Response, next: NextFunction) {
    try {
      const campaign = await createCampaign(req.body);
      res.status(201).json({ success: true, data: campaign });
    } catch (error) {
      next(error);
    }
  }

  async updateCampaign(req: Request, res: Response, next: NextFunction) {
    try {
      const campaign = await updateCampaign(req.params.id, req.body);
      res.json({ success: true, data: campaign });
    } catch (error) {
      next(error);
    }
  }

  async deleteCampaign(req: Request, res: Response, next: NextFunction) {
    try {
      await deleteCampaign(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async getCampaignInsights(req: Request, res: Response, next: NextFunction) {
    try {
      const insights = await getInsights(req.params.id);
      res.json({ success: true, data: insights });
    } catch (error) {
      next(error);
    }
  }
}

export const campaignController = new CampaignController();
