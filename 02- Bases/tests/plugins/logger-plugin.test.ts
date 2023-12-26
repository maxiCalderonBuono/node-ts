
import { logger as winstonLogger, buildLogger, logger } from '../../src/plugins/logger-plugin';
import winston from 'winston';

describe("plugins/logger-plugin.ts", () => {

  test("buildLogger should return a function", () => {
    const logger = buildLogger("test")
    expect(logger.error).toBeInstanceOf(Function)
    expect(logger.log).toBeInstanceOf(Function)
  })

  test("logger.log should log a message", () => {

    const winstonLoggerMock = jest.spyOn(winstonLogger, "log")

    const message = "test message"

    const service = "test service"

    const logger = buildLogger(service)

    logger.log(message)

    expect(winstonLoggerMock).toHaveBeenCalledWith("info", expect.objectContaining({
      level: 'info',
      message,
      service
    })
    )
  })
})