export const getRepositoryLanguages = (state) => state.repositoryLanguages && state.repositoryLanguages.data;

export const isProcessing = (state) => (
    state.repositoryLanguages && state.repositoryLanguages.processing
);

export const findByRepoId = (state, repoId) => {
    const items = state.repositoryLanguages && state.repositoryLanguages.data || [];

    return items.find(item => item.repoId === repoId);
};
