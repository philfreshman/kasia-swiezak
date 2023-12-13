include .env
export


IGNORE_IMAGES = true

all: build copy_to_ftp


copy_to_ftp:
	@echo "Copying files to ftp...\n"
#	@make transfer > /dev/null 2>&1
	@make transfer
	@echo "Copying finished!\n"


build:
	@echo "Building...\n"
#	@make generate > /dev/null 2>&1
	@make generate
	@echo "Build finished\n"


transfer:
ifeq ($(IGNORE_IMAGES), true)
	lftp -c "open -u ${FTP_USERNAME},${FTP_PASSWORD} ${FTP_HOST}:${FTP_PORT}; mirror --only-newer --reverse -x .output/public/images/new/ .output/public/images/original/ --delete --verbose=3 ${FTP_LOCAL_PATH} ${FTP_DEPLOYMENT_PATH}"
else
	lftp -c "open -u ${FTP_USERNAME},${FTP_PASSWORD} ${FTP_HOST}:${FTP_PORT}; mirror --only-newer --reverse -x ^\images/original/ --delete --verbose=3 ${FTP_LOCAL_PATH} ${FTP_DEPLOYMENT_PATH}"
endif


generate:
	bunx nuxi generate
