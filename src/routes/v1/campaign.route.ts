import { Router } from 'express';
import { campaignController } from '../../controllers/campaign.controller';

const router = Router();

/**
 * @swagger
 * /campaigns:
 *   get:
 *     summary: Retrieve a list of campaigns
 *     description: Fetches all campaigns with associated response counts.
 *     tags: [Campaigns]
 *     responses:
 *       200:
 *         description: A list of campaigns.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Campaign'
 */
router.get('/', campaignController.getCampaigns);

/**
 * @swagger
 * /campaigns:
 *   post:
 *     summary: Create a new campaign
 *     description: Creates a campaign with the provided data.
 *     tags: [Campaigns]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CampaignCreateInput'
 *     responses:
 *       201:
 *         description: The created campaign.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Campaign'
 */
router.post('/', campaignController.createCampaign);

/**
 * @swagger
 * /campaigns/{id}:
 *   get:
 *     summary: Retrieve a specific campaign
 *     description: Fetches a campaign by its ID, including its questions and response counts.
 *     tags: [Campaigns]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The campaign ID.
 *     responses:
 *       200:
 *         description: The campaign data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Campaign'
 *       404:
 *         description: Campaign not found.
 */
router.get('/:id', campaignController.getCampaign);

/**
 * @swagger
 * /campaigns/{id}:
 *   put:
 *     summary: Update a specific campaign
 *     description: Updates a campaign with the provided data.
 *     tags: [Campaigns]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The campaign ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CampaignUpdateInput'
 *     responses:
 *       200:
 *         description: The updated campaign.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Campaign'
 *       404:
 *         description: Campaign not found.
 */
router.put('/:id', campaignController.updateCampaign);

/**
 * @swagger
 * /campaigns/{id}:
 *   delete:
 *     summary: Delete a specific campaign
 *     description: Deletes a campaign by its ID.
 *     tags: [Campaigns]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The campaign ID.
 *     responses:
 *       204:
 *         description: Campaign successfully deleted.
 *       404:
 *         description: Campaign not found.
 */
router.delete('/:id', campaignController.deleteCampaign);

/**
 * @swagger
 * /campaigns/{id}/insights:
 *   get:
 *     summary: Retrieve insights for a campaign
 *     description: Fetches insights related to the specified campaign.
 *     tags: [Campaigns]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The campaign ID.
 *     responses:
 *       200:
 *         description: A list of insights.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Insight'
 *       404:
 *         description: Campaign not found.
 */
router.get('/:id/insights', campaignController.getCampaignInsights);

export default router;
