import { Prisma, Campaign } from '@prisma/client';
import ApiError from '../utils/ApiError';
import httpStatus from 'http-status';
import prisma from '../client';

/**
 * Retrieves all campaigns with a count of their responses.
 * 
 * @returns {Promise<Campaign[]>} A promise that resolves to a list of campaigns.
 */
export const findAll = async (): Promise<Campaign[]> => {
  return prisma.campaign.findMany({
    include: {
      _count: {
        select: { responses: true }
      }
    }
  });
};

/**
 * Finds a campaign by its ID.
 * 
 * @param {string} id - The ID of the campaign to retrieve.
 * @returns {Promise<Campaign>} A promise that resolves to the campaign.
 * @throws {ApiError} Throws an error if the campaign is not found.
 */
export const findById = async (id: string): Promise<Campaign> => {
  const campaign = await prisma.campaign.findUnique({
    where: { id },
    include: {
      questions: { orderBy: { order: 'asc' } },
      _count: { select: { responses: true } }
    }
  });

  if (!campaign) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Campaign not found');
  }

  return campaign;
};

/**
 * Creates a new campaign.
 * 
 * @param {Prisma.CampaignCreateInput} data - The data to create the campaign.
 * @returns {Promise<Campaign>} A promise that resolves to the created campaign.
 */
export const createCampaign = async (data: Prisma.CampaignCreateInput): Promise<Campaign> => {
  return prisma.campaign.create({
    data,
    include: { questions: true }
  });
};

/**
 * Updates an existing campaign by ID.
 * 
 * @param {string} id - The ID of the campaign to update.
 * @param {Prisma.CampaignUpdateInput} data - The data to update the campaign.
 * @returns {Promise<Campaign>} A promise that resolves to the updated campaign.
 * @throws {ApiError} Throws an error if the campaign is not found.
 */
export const updateCampaign = async (id: string, data: Prisma.CampaignUpdateInput): Promise<Campaign> => {
  const campaign = await findById(id);

  if (!campaign) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Campaign not found');
  }

  return prisma.campaign.update({
    where: { id },
    data,
    include: { questions: true }
  });
};

/**
 * Deletes a campaign by ID.
 * 
 * @param {string} id - The ID of the campaign to delete.
 * @returns {Promise<void>} A promise that resolves when the campaign is deleted.
 * @throws {ApiError} Throws an error if the campaign is not found.
 */
export const deleteCampaign = async (id: string): Promise<void> => {
  const campaign = await findById(id);

  if (!campaign) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Campaign not found');
  }

  await prisma.campaign.delete({ where: { id } });
};

/**
 * Retrieves insights for a specific campaign.
 * 
 * @param {string} id - The ID of the campaign.
 * @returns {Promise<any[]>} A promise that resolves to a list of insights.
 * @throws {ApiError} Throws an error if the campaign is not found.
 */
export const getInsights = async (id: string): Promise<any[]> => {
  const campaign = await findById(id);

  if (!campaign) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Campaign not found');
  }

  return prisma.insight.findMany({
    where: { campaignId: id },
    orderBy: { createdAt: 'desc' }
  });
};

export default {
  findAll,
  findById,
  createCampaign,
  updateCampaign,
  deleteCampaign,
  getInsights
};
