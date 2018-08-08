<?php
// This file was auto-generated from sdk-root/src/data/transcribe/2017-10-26/api-2.json
return [ 'version' => '2.0', 'metadata' => [ 'apiVersion' => '2017-10-26', 'endpointPrefix' => 'transcribe', 'jsonVersion' => '1.1', 'protocol' => 'json', 'serviceFullName' => 'Amazon Transcribe Service', 'signatureVersion' => 'v4', 'signingName' => 'transcribe', 'targetPrefix' => 'Transcribe', 'uid' => 'transcribe-2017-10-26', ], 'operations' => [ 'GetTranscriptionJob' => [ 'name' => 'GetTranscriptionJob', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'GetTranscriptionJobRequest', ], 'output' => [ 'shape' => 'GetTranscriptionJobResponse', ], 'errors' => [ [ 'shape' => 'BadRequestException', ], [ 'shape' => 'LimitExceededException', ], [ 'shape' => 'InternalFailureException', ], [ 'shape' => 'NotFoundException', ], ], ], 'ListTranscriptionJobs' => [ 'name' => 'ListTranscriptionJobs', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'ListTranscriptionJobsRequest', ], 'output' => [ 'shape' => 'ListTranscriptionJobsResponse', ], 'errors' => [ [ 'shape' => 'BadRequestException', ], [ 'shape' => 'LimitExceededException', ], [ 'shape' => 'InternalFailureException', ], ], ], 'StartTranscriptionJob' => [ 'name' => 'StartTranscriptionJob', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'StartTranscriptionJobRequest', ], 'output' => [ 'shape' => 'StartTranscriptionJobResponse', ], 'errors' => [ [ 'shape' => 'BadRequestException', ], [ 'shape' => 'LimitExceededException', ], [ 'shape' => 'InternalFailureException', ], [ 'shape' => 'ConflictException', ], ], ], ], 'shapes' => [ 'BadRequestException' => [ 'type' => 'structure', 'members' => [ 'Message' => [ 'shape' => 'FailureReason', ], ], 'exception' => true, ], 'ConflictException' => [ 'type' => 'structure', 'members' => [ 'Message' => [ 'shape' => 'String', ], ], 'exception' => true, ], 'DateTime' => [ 'type' => 'timestamp', ], 'FailureReason' => [ 'type' => 'string', ], 'GetTranscriptionJobRequest' => [ 'type' => 'structure', 'required' => [ 'TranscriptionJobName', ], 'members' => [ 'TranscriptionJobName' => [ 'shape' => 'TranscriptionJobName', ], ], ], 'GetTranscriptionJobResponse' => [ 'type' => 'structure', 'members' => [ 'TranscriptionJob' => [ 'shape' => 'TranscriptionJob', ], ], ], 'InternalFailureException' => [ 'type' => 'structure', 'members' => [ 'Message' => [ 'shape' => 'String', ], ], 'exception' => true, 'fault' => true, ], 'LanguageCode' => [ 'type' => 'string', 'enum' => [ 'en-US', 'es-US', ], ], 'LimitExceededException' => [ 'type' => 'structure', 'members' => [ 'Message' => [ 'shape' => 'String', ], ], 'exception' => true, ], 'ListTranscriptionJobsRequest' => [ 'type' => 'structure', 'required' => [ 'Status', ], 'members' => [ 'Status' => [ 'shape' => 'TranscriptionJobStatus', ], 'NextToken' => [ 'shape' => 'NextToken', ], 'MaxResults' => [ 'shape' => 'MaxResults', ], ], ], 'ListTranscriptionJobsResponse' => [ 'type' => 'structure', 'members' => [ 'Status' => [ 'shape' => 'TranscriptionJobStatus', ], 'NextToken' => [ 'shape' => 'NextToken', ], 'TranscriptionJobSummaries' => [ 'shape' => 'TranscriptionJobSummaries', ], ], ], 'MaxResults' => [ 'type' => 'integer', 'max' => 100, 'min' => 1, ], 'Media' => [ 'type' => 'structure', 'members' => [ 'MediaFileUri' => [ 'shape' => 'Uri', ], ], ], 'MediaFormat' => [ 'type' => 'string', 'enum' => [ 'mp3', 'mp4', 'wav', 'flac', ], ], 'MediaSampleRateHertz' => [ 'type' => 'integer', 'max' => 48000, 'min' => 8000, ], 'NextToken' => [ 'type' => 'string', 'max' => 8192, ], 'NotFoundException' => [ 'type' => 'structure', 'members' => [ 'Message' => [ 'shape' => 'String', ], ], 'exception' => true, ], 'StartTranscriptionJobRequest' => [ 'type' => 'structure', 'required' => [ 'TranscriptionJobName', 'LanguageCode', 'MediaFormat', 'Media', ], 'members' => [ 'TranscriptionJobName' => [ 'shape' => 'TranscriptionJobName', ], 'LanguageCode' => [ 'shape' => 'LanguageCode', ], 'MediaSampleRateHertz' => [ 'shape' => 'MediaSampleRateHertz', ], 'MediaFormat' => [ 'shape' => 'MediaFormat', ], 'Media' => [ 'shape' => 'Media', ], ], ], 'StartTranscriptionJobResponse' => [ 'type' => 'structure', 'members' => [ 'TranscriptionJob' => [ 'shape' => 'TranscriptionJob', ], ], ], 'String' => [ 'type' => 'string', ], 'Transcript' => [ 'type' => 'structure', 'members' => [ 'TranscriptFileUri' => [ 'shape' => 'Uri', ], ], ], 'TranscriptionJob' => [ 'type' => 'structure', 'members' => [ 'TranscriptionJobName' => [ 'shape' => 'TranscriptionJobName', ], 'TranscriptionJobStatus' => [ 'shape' => 'TranscriptionJobStatus', ], 'LanguageCode' => [ 'shape' => 'LanguageCode', ], 'MediaSampleRateHertz' => [ 'shape' => 'MediaSampleRateHertz', ], 'MediaFormat' => [ 'shape' => 'MediaFormat', ], 'Media' => [ 'shape' => 'Media', ], 'Transcript' => [ 'shape' => 'Transcript', ], 'CreationTime' => [ 'shape' => 'DateTime', ], 'CompletionTime' => [ 'shape' => 'DateTime', ], 'FailureReason' => [ 'shape' => 'FailureReason', ], ], ], 'TranscriptionJobName' => [ 'type' => 'string', 'max' => 200, 'min' => 1, 'pattern' => '^[0-9a-zA-Z._-]+', ], 'TranscriptionJobStatus' => [ 'type' => 'string', 'enum' => [ 'IN_PROGRESS', 'FAILED', 'COMPLETED', ], ], 'TranscriptionJobSummaries' => [ 'type' => 'list', 'member' => [ 'shape' => 'TranscriptionJobSummary', ], ], 'TranscriptionJobSummary' => [ 'type' => 'structure', 'members' => [ 'TranscriptionJobName' => [ 'shape' => 'TranscriptionJobName', ], 'CreationTime' => [ 'shape' => 'DateTime', ], 'CompletionTime' => [ 'shape' => 'DateTime', ], 'LanguageCode' => [ 'shape' => 'LanguageCode', ], 'TranscriptionJobStatus' => [ 'shape' => 'TranscriptionJobStatus', ], 'FailureReason' => [ 'shape' => 'FailureReason', ], ], ], 'Uri' => [ 'type' => 'string', 'max' => 2000, 'min' => 1, ], ],];
