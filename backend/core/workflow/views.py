from rest_framework import status
from rest_framework import generics
from rest_framework.response import Response
from .serializers import MachineWorkflowStepJoinMachineSerializer
from .models import MachineWorkflowStepJoinMachine


class MachineWorkflowStepView(generics.ListAPIView):
    serializer_class = MachineWorkflowStepJoinMachineSerializer

    def list(self, request, *args, **kwargs):
        id = request.GET.get("id", "")
        queryset = MachineWorkflowStepJoinMachine.objects.raw(
            "select core_machineworkflowstep.id,"
            " core_machineworkflowstep.order_id,"
            " core_machineworkflowstep.step_order,"
            " core_machineworkflowstep.end_datetime,"
            " core_machineworkflowstep.state_id,"
            " core_machinetype.label as step_activity"
            " from core_machineworkflowstep"
            " inner join core_machine"
            " on core_machineworkflowstep.machine_id="
            " core_machine.serial_number"
            " inner join core_machinetype"
            " on core_machine.type_id=core_machinetype.id"
            " where core_machineworkflowstep.order_id = {}".format(id)
        )
        serializer = self.get_serializer(queryset, many=True)
        print(serializer.data)
        if len(serializer.data):
            return Response({
                'data': serializer.data,
            }, status=status.HTTP_200_OK)
        return Response({
            "data": [],
            "message": "Not found."
        }, status=status.HTTP_404_NOT_FOUND)
