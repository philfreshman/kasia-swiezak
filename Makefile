include .env
export


all:
	@make build
	@make copy_to_ftp


copy_to_ftp:
	@echo "Copying files to ftp...\n"
	@make transfer > /dev/null 2>&1
	@echo "Copying finished!\n"


build:
	@echo "Building...\n"
	@make generate > /dev/null 2>&1
	@echo "Build finished\n"


transfer:
	lftp -c "open -u ${FTP_USERNAME},${FTP_PASSWORD} ${FTP_HOST}:${FTP_PORT}; mirror --reverse --delete --verbose=3 ${FTP_LOCAL_PATH} ${FTP_DEPLOYMENT_PATH}"


generate:
	bunx nuxi generate
